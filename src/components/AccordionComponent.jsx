import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SyallbusObject = [
  {
    tite: "ReactJS Syallbus",
    description: [
      "1. Exploring React router third DOM party Package",
      "2. Exploring useState useEffect function that is first party package",
      "3. Exploring props passing data from parent to child",
    ],
  },

  {
    tite: "ExpressJS Syallbus",
    description: [
      "1.Routing",
      "2.Middlewares",
      "3.Authenticxation and Authorization",
    ],
  },
];

export const AccordionComponent = () => {
  return (
    <section className="px-6">
      <Accordion type="single">
        {SyallbusObject.map((eachCourse, index) => (
          // console.log(eachCourse)

          <AccordionItem value={`item-${index}}`} key={index}>
            <AccordionTrigger>{eachCourse.tite}</AccordionTrigger>
            <AccordionContent>
              {eachCourse.description.map((eachpoint) => (
                <p>{eachpoint}</p>
              ))}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
