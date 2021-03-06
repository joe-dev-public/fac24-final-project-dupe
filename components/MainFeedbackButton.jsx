export default function MainFeedbackButton({ feedbackMode, setFeedbackMode }) {
  let myClassName =
    "block rounded py-1 px-2 cursor-pointer mt-6 mx-auto max-w-fit ";

  if (feedbackMode) {
    myClassName += "bg-slate-600 hover:bg-slate-700 text-white";
  } else {
    myClassName += "bg-green-400 hover:bg-green-500";
  }

  return (
    <a className={myClassName} onClick={() => setFeedbackMode(!feedbackMode)}>
      {feedbackMode ? (
        <>Done submitting feedback ✔️</>
      ) : (
        <>Is this correct? Give feedback</>
      )}
    </a>
  );
}
