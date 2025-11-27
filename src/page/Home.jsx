import { Suspense, lazy } from "react";
const VideoHero = lazy(() => import("./../components/Home/VideoHero"));
const ImageHero = lazy(() => import("./../components/Home/ImageHero"));
const ImageProductHero = lazy(() =>
  import("./../components/Home/ImageProductHero")
);
const ImageBgHero = lazy(() => import("./../components/Home/ImageBgHero"));
import {
  VideoHeroData,
  ImageHeroData1,
  ImageHeroData2,
  ImageHeroData3,
  ImageProductHeroData1,
  ImageBgHeroData,
  ImageProductHeroData2,
} from "../data/Home";
import { motion } from "framer-motion";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const Home = () => {
  document.title = "Armaf";
  return (
    <>
      <main className="flex flex-col items-center">
        {/* Video */}
        <Suspense
          fallback={
            <Skeleton
              className="mb-8"
              width="100vw"
              height="600px"
              baseColor="#B0B0B0"
            />
          }
        >
          <motion.section
            className="w-full 2xl:[height:calc(100vh-140px)] mb-8"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <VideoHero Vdo={VideoHeroData.video} />
          </motion.section>
        </Suspense>
        {/* Image Hero 1 */}
        <Suspense
          fallback={
            <section className="lg:grid-cols-2 lg:gap-3 w-[98%] grid grid-cols-1 mb-8">
              {ImageHeroData1.map((_, index) => (
                <Skeleton key={index} height="400px" baseColor="#B0B0B0" />
              ))}
            </section>
          }
        >
          <motion.section
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
            className="lg:grid-cols-2 lg:gap-3 w-[98%] grid grid-cols-1"
          >
            {ImageHeroData1.map(({ name, path, image }, index) => (
              <motion.div
                className="w-full flex items-center justify-center"
                key={index}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeInOut" },
                  },
                }}
              >
                <ImageHero
                  name={name}
                  path={path}
                  image={image}
                  button={true}
                />
              </motion.div>
            ))}
          </motion.section>
        </Suspense>
        {/* Product Hero 1 */}
        <Suspense
          fallback={
            <section className="w-[96%] py-8 flex flex-col items-center gap-5 mb-8">
              <Skeleton width="400px" height="30px" baseColor="#B0B0B0" />
              <div className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-3">
                {ImageProductHeroData1.map((_, index) => (
                  <Skeleton key={index} height="400px" baseColor="#B0B0B0" />
                ))}
              </div>
            </section>
          }
        >
          <section className="w-[96%] py-8 flex flex-col items-center gap-5">
            <motion.h1
              className="md:text-4xl text-md md:px-0 px-4 tracking-wide font-extralight text-center"
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              EMBRACE THE GREATNESS WITHIN YOU
            </motion.h1>
            <motion.div
              className="w-full grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-3"
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
            >
              {ImageProductHeroData1.map(
                ({ name, price, stock, image, path }, index) => (
                  <motion.div
                    className="rounded-[2px] border border-gray-500/20 py-5 group relative"
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: -10 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.6, ease: "easeInOut" },
                      },
                    }}
                  >
                    <ImageProductHero
                      name={name}
                      price={price}
                      stock={stock}
                      image={image}
                      path={path}
                      between={true}
                    />
                  </motion.div>
                )
              )}
            </motion.div>
          </section>
        </Suspense>
        {/* Image 2 */}
        <Suspense
          fallback={
            <section className="lg:grid-cols-2 lg:gap-3 w-[98%] grid grid-cols-1 mb-8">
              {ImageHeroData2.map((_, index) => (
                <Skeleton key={index} height="400px" baseColor="#B0B0B0" />
              ))}
            </section>
          }
        >
          <motion.section
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
            className="lg:grid-cols-2 lg:gap-3 w-[98%] grid grid-cols-1"
          >
            {ImageHeroData2.map(({ name, path, image }, index) => (
              <motion.div
                className="w-full flex items-center justify-center"
                key={index}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeInOut" },
                  },
                }}
              >
                <ImageHero
                  key={index}
                  name={name}
                  path={path}
                  image={image}
                  button={true}
                />
              </motion.div>
            ))}
          </motion.section>
        </Suspense>

        {/* image bg */}
        <Suspense
          fallback={
            <Skeleton
              className="mb-8"
              width="100vw"
              height="500px"
              baseColor="#B0B0B0"
            />
          }
        >
          <motion.section
            className="relative w-full h-[550px] bg-cover bg-center bg-no-repeat
            lg:bg-fixed mt-3"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <ImageBgHero
              image={ImageBgHeroData.image}
              name={ImageBgHeroData.name}
              path={ImageBgHeroData.path}
            />
          </motion.section>
        </Suspense>
        {/* product 2 */}
        <Suspense
          fallback={
            <section className="w-[96%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-3 my-12">
              {ImageProductHeroData2.map((_, index) => (
                <Skeleton key={index} height="400px" baseColor="#B0B0B0" />
              ))}
            </section>
          }
        >
          <motion.section
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
            className="w-[96%] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-2 gap-3 my-12"
          >
            {ImageProductHeroData2.map(
              ({ name, price, stock, image, path }, index) => (
                <motion.div
                  className="rounded-[2px] border border-gray-500/20 py-5 group relative"
                  key={index}
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: { duration: 0.6, ease: "easeInOut" },
                    },
                  }}
                >
                  <ImageProductHero
                    name={name}
                    price={price}
                    stock={stock}
                    image={image}
                    path={path}
                    between={false}
                  />
                </motion.div>
              )
            )}
          </motion.section>
        </Suspense>

        {/* image 3 */}
        <Suspense
          fallback={
            <section className="lg:grid-cols-2 lg:gap-3 w-[98%] grid grid-cols-1 mb-8">
              {ImageHeroData3.map((_, index) => (
                <Skeleton key={index} height="400px" baseColor="#B0B0B0" />
              ))}
            </section>
          }
        >
          <motion.section
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
            className="lg:grid-cols-2 lg:gap-3 w-[98%] grid grid-cols-1"
          >
            {ImageHeroData3.map(({ name, path, image }, index) => (
              <motion.div
                className="w-full flex items-center justify-center"
                key={index}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6, ease: "easeInOut" },
                  },
                }}
              >
                <ImageHero
                  name={name}
                  path={path}
                  image={image}
                  button={false}
                />
              </motion.div>
            ))}
          </motion.section>
        </Suspense>
      </main>
    </>
  );
};

export default Home;
