const RuleLink = ({ text, onClick }) => {
  return (
    <div className="text-center mt-[27px]">
      <button
        onClick={() => onClick()}
        className="text-white text-xs italic border-b pb-[1px] tracking-[3px]"
      >
        {text}
      </button>
    </div>
  )
}

export default RuleLink
