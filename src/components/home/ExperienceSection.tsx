import React from 'react'

export function ExperienceSection(): JSX.Element {
  return (
    <section
      id="experience"
      className="hero dark:bg-dark bg-white lg:py-16 py-8 lg:px-0 px-5"
    >
      <div className="container">
        <div className="flex flex-wrap lg:flex-row flex-col gap-16 items-center place-content-around">
          <div className="lg:w-1/2 w-full">
            <h1 className="dark:text-white text-black lg:text-4xl text-3xl text-left">
              Experience
            </h1>
          </div>
          <div className="lg:w-2/5 w-full"></div>
        </div>
      </div>
    </section>
  )
}