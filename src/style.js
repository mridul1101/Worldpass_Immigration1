const styles = {
  boxWidth: "xl:max-w-[1280px] w-full",

  heading2: "font-poppins font-bold xs:text-[48px] text-[38px] text-white xs:leading-[72px] leading-[56px] w-full",
  headingDark: "font-poppins font-bold xs:text-[44px] text-[34px] text-[#0B2447] xs:leading-[60px] leading-[48px] w-full",
  paragraph: "font-poppins font-normal text-dimWhite text-[17px] leading-[30px]",
  paragraphDark: "font-poppins font-normal text-gray-600 text-[16px] leading-[28px]",

  flexCenter: "flex justify-center items-center",
  flexStart: "flex justify-center items-start",

  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-12 py-4",

  marginX: "sm:mx-16 mx-6",
  marginY: "sm:my-16 my-6",
}

export const layout = {
  section: `flex md:flex-row flex-col ${styles.paddingY}`,
  sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

  sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
  sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

  sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
}

export default styles;