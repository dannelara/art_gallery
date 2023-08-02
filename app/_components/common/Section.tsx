import Padding from "_components/utils/Padding";
import React from "react";

type Props = {
    children: JSX.Element | JSX.Element[];
    padding?: boolean;
    marginBt?: boolean;
    autoHeight?: boolean;
}

const Section = ({
    children,
    padding,
    autoHeight,
}: Props) => {
    return (
        <section
            className={`flex h-auto w-full ${autoHeight ? "h-fit" : "min-h-[30rem] my-10 md:my-20"} `}
        >
            {
                padding ?
                    <Padding>
                        {children}
                    </Padding>
                    :
                    <> {children} </>
            }
        </section>
    );
};

export default Section;
