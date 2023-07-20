import EducationInput from './EducationInput'
import ExperienceInput from './ExperienceInput'
import HeaderInput from './HeaderInput'
import SaveCV from './SaveCV'

export default function Inputs() {
  return (
    <section className='min-h-[600px] w-fit flex flex-col gap-[24px]'>
      <SaveCV />
      <HeaderInput />
      <EducationInput />
      <ExperienceInput />

    </section>
  )
}
