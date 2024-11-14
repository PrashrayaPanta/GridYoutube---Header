export const EachBox = () => {
  return (
    <section className="bg-red-400 p-2">
      <div className=" grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 min-h-20 gap-5">
        <div className="min-h-20 flex justify-center items-center bg-green-400">
          Total Products You Ordered :Dynamic Value 10
        </div>
        <div className="min-h-20 flex justify-center items-center text-center bg-purple-500">
          Total Price: 10000
        </div>
        <div className="min-h-20  flex justify-center items-center text-center bg-orange-900">
          Status of order : fulfilled or pending
        </div>
      </div>
    </section>
  );
};
