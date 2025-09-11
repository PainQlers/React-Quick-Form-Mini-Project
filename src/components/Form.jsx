import { useState } from "react";
import FormField from "./FormField";
import MovieList from "./MovieList";
import FormError from "./FormError";

function Form() {
  const [selectedOption, setSelectedOption] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [opinion, setOpinion] = useState("");
  const [errors, setErrors] = useState({});

  const movies = [
    { title: "Avatar", year: "2009", director: "James Cameron" },
    { title: "Inception", year: "2010", director: "Christopher Nolan" },
    { title: "Interstellar", year: "2014", director: "Christopher Nolan" },
    {
      title: "The Shawshank Redemption",
      year: "1994",
      director: "Frank Darabont",
    },
    { title: "Pulp Fiction", year: "1994", director: "Quentin Tarantino" },
    { title: "Parasite", year: "2019", director: "Bong Joon-ho" },
  ];

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validate() {
    let newErrors = {};

    if (!name) {
      newErrors.name = "โปรดใส่ชื่อของคุณ";
    }
    if (!email) {
      newErrors.email = "โปรดใส่อีเมลของคุณ";
    } else if (!isValidEmail(email)) {
      newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง";
    }
    if (!selectedOption) {
      newErrors.selectedOption = "กรุณาเลือกหนังที่คุณชอบ";
    }

    return newErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    let newFormData = {
      ชื่อ: name,
      Email: email,
      หนังที่ชื่นชอบ: selectedOption,
      ความคิดเห็น: opinion,
    };
    const newErrors = validate();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert(JSON.stringify(newFormData, null, 1));
      setName("");
      setEmail("");
      setSelectedOption("");
      setOpinion("");
      setErrors({});
      // alert("ส่งข้อมูลเรียบร้อย")
    }
  }

  function handleReset(event) {
    event.preventDefault();

    setName("");
    setEmail("");
    setSelectedOption("");
    setOpinion("");
    setErrors({});
  }

  return (
    <form
      className="flex flex-col gap-2 w-100 p-8 justify-center items-center border-1 border-gray-300"
      onSubmit={handleSubmit}
    >
      <FormError
        errors={errors} 
      />
      <p>แบบสอบถาม</p>
      <div className="">
      <FormField
        label="ชื่อ"
        type="text"
        name="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        error={errors.name}
      />
        <FormField
        label="Email"
        type="email"
        name="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        error={errors.email}
      />
      </div>
      <MovieList
        movies={movies}
        selectedOption={selectedOption}
        onChange={handleChange}
        error={errors.selectedOption}
      />
      <p>Selected: {selectedOption || "None"}</p>
      <p>{}</p>
      <textarea
        placeholder="ความคิดเห็นของคุณต่อหนังที่คุณชื่นชอบ     (ไม่บังคับ)"
        value={opinion}
        className="border-1 border-gray-300 w-80 h-40 p-2 resize-none"
        onChange={(event) => {
          setOpinion(event.target.value);
        }}
      />
      <button type="submit" className="bg-green-300 mt-2" >
        ส่งคำตอบ
      </button>
      <button type="button" className="bg-red-400 mt-2" onClick={handleReset}>
        รีเซ็ตคำตอบ
      </button>
    </form>
  );
}

export default Form;
