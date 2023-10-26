import React from "react"

export const Modal = () => {
  return (
    <>
      <div className="fixed bg-black/50 top-0 right-0 left-0 bottom-0" />
      <div className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2">
        <h2>Modal</h2>
      </div>
    </>
  )
}
