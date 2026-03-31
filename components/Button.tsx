const Button = ({
  styles,
  text = "Book Free Consultation",
  href = "#contact",
}: {
  styles?: string;
  text?: string;
  href?: string;
}) => {
  return (
    <a
      href={href}
      className={`py-3.5 px-8 bg-accent text-primary font-poppins font-bold text-[15px] rounded-full hover:scale-105 hover:shadow-xl transition-all shadow-lg inline-block text-center ${styles}`}
    >
      📞 {text}
    </a>
  );
};

export default Button;
