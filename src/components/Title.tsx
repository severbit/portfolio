type titleProps = { text: string }

const Title = ({ text }: titleProps) => {
  return (
    <h1 className="services-title text-4xl flex justify-center font-bold mb-10">
      {text}<span className="text-mintpaper">.</span>
    </h1>
  )
}

export default Title