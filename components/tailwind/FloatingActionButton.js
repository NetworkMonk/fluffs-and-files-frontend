import { Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useTimeoutFn } from 'react-use';
import Timely from "../Timely";

export default function FloatingActionButton() {
  const [isShowing, setIsShowing] = useState(false);
  useTimeoutFn(() => setIsShowing(true), 1000);

  const [tooltipShowing, setTooltipShowing] = useState(false);

  const [timelyVisible, setTimelyVisible] = useState(false);

  return (
    <div>
      <div className="fixed bottom-0 right-0 z-30">
        <div className="grid grid-flow-row gap-10 w-full mr-10 mb-5">
          <div className="flex items-center justify-around">
            <div className="">
              <Transition
                as={Fragment}
                show={isShowing}
                enter="transform transition duration-[1000ms]"
                enterFrom="opacity-0 scale-50"
                enterTo="opacity-100 scale-100"
              >
                <div className="flex">
                  <Transition
                    as={Fragment}
                    show={tooltipShowing}
                    enter="transform transition duration-[1000ms]"
                    enterFrom="opacity-0 scale-50"
                    enterTo="opacity-100 scale-100"
                    leave="transform duration-200 transition ease-in-out"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <div className="flex">
                      <div className="bg-white shadow p-2 my-1 rounded">
                        <p>Book an Appointment</p>
                      </div>
                      <svg className="text-white h-2 left-0 mt-5  mr-3 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 0,255"/></svg>
                    </div>
                  </Transition>
                  <button
                    className="p-0 w-12 h-12 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow-lg transition ease-in duration-200 focus:outline-none"
                    onMouseEnter={() => setTooltipShowing(true)}
                    onMouseLeave={() => setTooltipShowing(false)}
                    onClick={() => setTimelyVisible(true)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" viewBox="0 0 20 20" fill="currentColor">
                      <path fill="#fff" fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0
                          00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </Transition>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 right-0 z-40 max-w-full">
        <Transition
          as={Fragment}
          show={timelyVisible}
          enter="transform transition duration-[1000ms]"
          enterFrom="opacity-0 scale-50"
          enterTo="opacity-100 scale-100"
          leave="transform duration-200 transition ease-in-out"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className="bg-white rounded m-3 p-3 shadow-lg text-right">
            <button
              className="p-0 text-red-600 hover:text-red-700 mouse transition ease-in duration-200 focus:outline-none "
              onClick={() => setTimelyVisible(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
            </button>
            <Timely />
          </div>
        </Transition>
      </div>
    </div>
  );
}