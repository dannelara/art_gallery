import Padding from "_components/utils/Padding";
import React from "react";

type Props = {
    children: JSX.Element | JSX.Element[];
    padding?: boolean;
    marginBt?: boolean;
}

const Section = ({
    children,
    padding
}: Props) => {
    return (
        <div
            className="flex h-auto w-full min-h-[30rem] my-10 md:my-20"
        >
            {
                padding ?
                    <Padding>
                        {children}
                    </Padding>
                    :
                    <> {children} </>
            }
        </div>
    );
};

export default Section;
