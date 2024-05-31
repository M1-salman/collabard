import Image from "next/image";

import {
  GitHubLogoIcon,
  InstagramLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const About = () => {
  return (
    <section className="h-[100vh] flex lg:flex-row flex-col lg:justify-normal justify-evenly">
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center">
        <h2 className="w-3/4 scroll-m-20 pb-4 text-4xl font-semibold tracking-tight first:mt-0">
          Frequently asked questions
        </h2>
        <Accordion type="single" collapsible className="w-3/4">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-start">
              How do I create an instant room for a video call?
            </AccordionTrigger>
            <AccordionContent>
              Click &quot;Create your room&quot; and select &quot;Create an
              instant room&quot; and it will redirect to the new room.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-start">
              How can I join an existing room using a room ID?
            </AccordionTrigger>
            <AccordionContent>
              Enter the room ID in the input field and press &quot;Enter&quot;
              or click &quot;Join room.&quot;
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-start">
              What should I do if I encounter an error when trying to join a
              room?
            </AccordionTrigger>
            <AccordionContent>
              Check the room ID for typos and ensure your internet connection is
              stable. If the issue persists, contact{" "}
              <span className="border-b">salmanmasood917@gmail.com</span>.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
      <div className="lg:w-1/2 w-full flex flex-col justify-center items-center">
        <span className="text-2xl font-semibold text-muted-foreground mx-2">
          Built by
        </span>
        <h2 className="scroll-m-20 pb-2 border-b  sm:text-4xl text-3xl font-semibold tracking-tight first:mt-0">
          Salman masood
        </h2>
        <div className="flex mt-3">
          <a href="https://github.com/M1-salman/project-m72" target="_blank">
            <GitHubLogoIcon className="mx-4" width={20} height={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/salman-masood917/"
            target="_blank"
          >
            <LinkedInLogoIcon className="mx-4" width={20} height={20} />
          </a>
          <a href="https://www.instagram.com/realsalmanmasood/" target="_blank">
            <InstagramLogoIcon className="mx-4" width={20} height={20} />
          </a>
          <a href="https://twitter.com/salman_code" target="_blank">
            <Image
              src="x.svg"
              width={14}
              height={14}
              className="invert pt-1 mx-2"
              alt="github svg not found"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
