import {Dialog, DialogPanel, DialogTitle} from "@headlessui/react";
import {type ReactNode} from "react";

interface IProps {
  isOpen: boolean;
  close: () => void;
  title?: string;
  children: ReactNode;
}

const Modal = ({isOpen, close, title, children}: IProps) => {
  return (
    <>
      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
        __demoMode
      >
        {/* orange-500/85 */}
        {/* blur effect */}
        <div className="fixed inset-0 bg-slate-950/90 backdrop-blur-none" />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl border border-white bg-slate-50  p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] 
              data-closed:opacity-0 hover:bg-slate-100 "
            >
              {title && (
                <DialogTitle
                  as="h3"
                  className="text-base/7  text-xl font-bold  text-violet-700  hover:text-violet-800 cursor-text"
                >
                  {title}
                </DialogTitle>
              )}

              <div className="mt-4">{children}</div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
};
export default Modal;
