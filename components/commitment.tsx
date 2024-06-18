import Image from "next/image";

import committmentImage from "@/public/images/commitment-img.png";

const Committment = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 p-5 py-20 lg:p-20 bg-[#F2F2F2]">
      <Image
        src={committmentImage}
        alt="committment image"
        className="w-full lg:w-1/3"
      />
      <div className="w-full lg:w-1/2">
        <h1 className="text-5xl font-bold mb-4">Commitment to Quality</h1>
        <p>
          Ensuring balance updates occur atomically to prevent race conditions
          during transactions is crucial for maintaining the integrity and
          accuracy of financial data in digital wallets. Imagine the digital
          wallet as a piggy bank where money can be added or taken out. When two
          actions, such as depositing and withdrawing money, happen
          simultaneously, there is a risk of miscounting the total amount if
          both actions try to read and update the balance at the same time. This
          is known as a race condition. To prevent such errors, updates to the
          balance must be handled atomically, meaning one transaction must fully
          complete before another begins. This process ensures that no two
          transactions can interfere with each other, thereby maintaining a
          consistent and accurate record of the balance. It’s like ensuring that
          in a queue, each person completes their turn fully before the next
          person starts, which eliminates the possibility of errors due to
          overlapping actions.{" "}
        </p>
      </div>
    </div>
  );
};

export default Committment;
