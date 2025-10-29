import { Link } from "react-router-dom";
import { Footerdata } from "../../data/Footer";
import { motion } from "framer-motion";
const Footer = () => {
  return (
    <motion.footer
      className="mt-14"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { duration: 0.6, ease: "easeInOut" },
        },
      }}
    >
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className="w-full h-[300px] bg-[#1b1b1b] flex items-center justify-center flex-col"
      >
        <h1 className="uppercase text-white font-semibold tracking-wider md:text-xl px-10 text-center">
          Join the domain of high perfumery and its circle
        </h1>
        <div className="flex md:flex-nowrap flex-wrap gap-5 mt-5 px-5">
          <input
            type="text"
            className="border border-white md:w-[500px] w-full p-3 placeholder:text-white placeholder:text-xl placeholder:font-medium text-white text-lg outline-0"
            placeholder="Email"
          />
          <button className="md:w-fit w-full relative inline-block overflow-hidden border  font-semibold tracking-wide cursor-pointer border-white px-8 py-3 text-white transition-all ease-linear uppercase text-sm group">
            <span className="relative z-10 group-hover:text-black">
              Subscribe
            </span>
            <span className="absolute inset-0 bg-white scale-x-0 origin-left transition-transform duration-300 ease-linear group-hover:scale-x-100 group-hover:origin-left group-hover:transition-transform"></span>
          </button>
        </div>
      </motion.section>
      <section className="w-full py-12 bg-black flex items-center justify-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.3,
              },
            },
          }}
          className="w-[90%]  grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-5"
        >
          {Footerdata.map(({ title, subfooter }, index) =>
            index != Footerdata.length - 1 ? (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeInOut" },
                  },
                }}
              >
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.3,
                      },
                    },
                  }}
                  className="flex flex-col items-center text-white text-sm gap-1 tracking-wider py-3"
                >
                  <motion.h1
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, ease: "easeInOut" },
                      },
                    }}
                    className="uppercase md:text-xl text-sm font-semibold text-center mb-3"
                  >
                    {title}
                  </motion.h1>
                  {subfooter.map((item, i) => (
                    <motion.li
                      variants={{
                        hidden: { opacity: 0, y: 10 },
                        visible: {
                          opacity: 1,
                          y: 0,
                          transition: { duration: 0.6, ease: "easeInOut" },
                        },
                      }}
                      key={i}
                      className="hover:underline text-white/70 hover:text-white"
                    >
                      <Link>{item}</Link>
                    </motion.li>
                  ))}
                </motion.ul>
              </motion.div>
            ) : (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeInOut" },
                  },
                }}
              >
                <motion.ul
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.3,
                      },
                    },
                  }}
                  className="flex flex-col items-center text-white text-sm gap-1 tracking-wider py-3"
                >
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, ease: "easeInOut" },
                      },
                    }}
                    className="uppercase md:text-xl text-sm font-semibold text-center mb-3"
                  >
                    {title}
                  </motion.li>
                  <motion.li
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, ease: "easeInOut" },
                      },
                    }}
                    className="flex gap-4 text-3xl"
                  >
                    {subfooter.map((item, i) => (
                      <p
                        key={i}
                        className="hover:underline text-white/70 hover:text-white"
                      >
                        <Link>
                          <i className={`bi bi-${item} cursor-pointer`}></i>
                        </Link>
                      </p>
                    ))}
                  </motion.li>
                </motion.ul>
              </motion.div>
            )
          )}
        </motion.div>
      </section>
    </motion.footer>
  );
};

export default Footer;
