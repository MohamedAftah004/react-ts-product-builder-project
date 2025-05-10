import { Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'
import Button from "./Button"
import type { ReactNode } from "react";


interface IProps{
  isOpen:boolean;
  close: ()=>void;
  title?:string;
  content?:string;
  children:ReactNode;

}

const Modal = ({isOpen , close,title , content ,children } : IProps)=> {
  

  return (
    <>

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
            >
              {title && <DialogTitle as="h3" className="text-base/7 font-medium text-sky-900 text-xl">
                {title}
              </DialogTitle>}
              
              {content && <p className="mt-2 text-sm/6 text-black/50">
                  {content}
              </p>}
              <div className="mt-4">
                {children}
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
export default Modal;