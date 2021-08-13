const RuleLink = ({ text, link }) => {
  return (
    <div className="text-center">
      <a
        href={link}
        className="text-white text-[3vw] italic border-b pb-[1px] tracking-[3px]"
      >
        {text}
      </a>
    </div>
  )
}

export default RuleLink
