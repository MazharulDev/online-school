"use client";
import { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
const Overview = () => {
  const [isCounted, setIsCounted] = useState(false);
  return (
    <section className="bg-[#F3F4F6] mt-16">
      <div className="px-6 py-10 space-y-8 max-w-[1200px] mx-auto">
        <div>
          <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-4">
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <div className="text-4xl font-bold leadi lg:text-6xl">
                <VisibilitySensor partialVisibility>
                  {({ isVisible }: { isVisible: boolean }) => (
                    <div style={{ height: 100 }}>
                      {isVisible && !isCounted ? (
                        <CountUp
                          end={86}
                          duration={5}
                          onEnd={() => setIsCounted(true)}
                        />
                      ) : (
                        120
                      )}
                      +
                    </div>
                  )}
                </VisibilitySensor>
              </div>
              <p className="text-sm sm:text-base">Job Placement</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <div className="text-4xl font-bold leadi lg:text-6xl">
                <VisibilitySensor partialVisibility>
                  {({ isVisible }: { isVisible: boolean }) => (
                    <div style={{ height: 100 }}>
                      {isVisible && !isCounted ? (
                        <CountUp end={1000} duration={5} />
                      ) : (
                        1200
                      )}
                      +
                    </div>
                  )}
                </VisibilitySensor>
              </div>
              <p className="text-sm sm:text-base">Student</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <div className="text-4xl font-bold leadi lg:text-6xl">
                <VisibilitySensor partialVisibility>
                  {({ isVisible }: { isVisible: boolean }) => (
                    <div style={{ height: 100 }}>
                      {isVisible && !isCounted ? (
                        <CountUp end={13} duration={5} />
                      ) : (
                        95
                      )}
                      %
                    </div>
                  )}
                </VisibilitySensor>
              </div>
              <p className="text-sm sm:text-base">Complition Rate</p>
            </div>
            <div className="flex flex-col justify-start m-2 lg:m-6">
              <div className="text-4xl font-bold leadi lg:text-6xl">
                <VisibilitySensor partialVisibility>
                  {({ isVisible }: { isVisible: boolean }) => (
                    <div style={{ height: 100 }}>
                      {isVisible && !isCounted ? (
                        <CountUp end={13} duration={5} />
                      ) : (
                        21
                      )}
                      +
                    </div>
                  )}
                </VisibilitySensor>
              </div>
              <p className="text-sm sm:text-base">Live Course</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;
