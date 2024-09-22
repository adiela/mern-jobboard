
export default function Home() {
  return (
      <form className="py-5 mb-5">
        <div>
            <label>
                Job Title:
                <input className="input" type="text" name="title" required />
            </label>
            <br />
            <label>
                Company:
                <input className="input" type="text" name="company" required />
            </label>
            <br />
            <label>
                Location:
                <input className="input" type="text" name="location" required />
            </label>
            <br />
            <label>
                Salary:
                <input className="input" type="text" name="salary" required />
            </label>
            <br />
            <label>
                Description:
                <textarea className="input" rows="7" name="description"></textarea>
            </label>
            <br />
            <button className="btn float-right" type="submit">Post Job</button>
        </div>
      </form>
  );
}
