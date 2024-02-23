// @ts-nocheck

export default function Form() {
  return (
    <form className="relative flex flex-col justify-center my-6 md:mt-8 px-5 md:px-10">
      <div className="flex flex-col items-start">
        <label className="font-bold text-xs mb-1" htmlFor="new">
          Email adress
        </label>
        <input
          className="border border-gray-300 hover:border-primary focus:outline-none focus:border-primary text-accent w-full mb-4 rounded-md py-3 px-3"
          type="email"
          placeholder="email@company.com"
          id="new"
        />
      </div>
      <button className="block bg-text text-secondary font-bold text-sm rounded-md py-3 px-3">
        Subscribe to monthly newsletter
      </button>
      <span className="absolute top-0 right-5 md:right-10 font-bold text-xs text-primary">
        Valid email required
      </span>
    </form>
  );
}
