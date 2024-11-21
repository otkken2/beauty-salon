import React from 'react'
import { useInView } from 'react-intersection-observer'


interface Props {
  words: string[]
}

const durationClasses = ['duration-[200ms]', 'duration-[322ms]', 'duration-[466ms]', 'duration-[600ms]', 'duration-[720ms]', 'duration-[864ms]', 'duration-[1008ms]', 'duration-[1152ms]', 'duration-[1296ms]', 'duration-[1440ms]']
const SlideHeading = ({ words }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  })
  return (
    <h2 className={`[writing-mode:vertical-lr] flex relative bg-blue-300 w-[90px] h-[100px] transform translate-y-10 pl-[100px]`}>
      {words.map((word, index) => {
        const durationClass = durationClasses[index]
        return (
          <span className={`block transform transition-all ${durationClass} w-fit ${inView ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`} ref={ref} key={index}>{word}</span>
        )
      })}
    </h2>
  )
}

export default SlideHeading