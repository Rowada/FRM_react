// @ts-nocheck

export default function Form() {
  return (
    <form className="flex flex-col items-start justify-center">
      <label htmlFor="new">Email adress</label>
      <input className="border border-accent" type="email" id="new" />

      <button>Subscribe to monthly newsletter</button>
    </form>
  );
}
