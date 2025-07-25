import Image from "next/image";
import Button from "@/app/components/Button";
import programmingConcept from "../../../public/images/programming-concept-illustration_114360-1351.jpg";

export default function Mission() {
  return (
    <main className="mt-10">
      <div>
        lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
        quidem. lorem ipsum dolor sit amet consectetur adipisicing elit.
        Quisquam, quidem. lorem ipsum dolor sit amet consectetur adipisicing
        elit. Quisquam, quidem. lorem
      </div>

    <div className="w-[400px]">
        <Image
        placeholder="blur"
        src={programmingConcept}
        alt="Programming Concept Illustration"
      />
    </div>

      <Button />
    </main>
  );
}
