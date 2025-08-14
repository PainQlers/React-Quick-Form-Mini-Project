import { useState } from "react";

function Form () {
    const [selectedOption ,setSelectedOption] = useState("");
    const [name ,setName] = useState("")
    const [email ,setEmail] = useState("")
    const [opinion ,setOpinion] = useState("")
    const [errors ,setErrors] = useState("")

    const movies = [
        { title: "Avatar", year: "2009", director: "James Cameron" },
        { title: "Inception", year: "2010", director: "Christopher Nolan" },
        { title: "Interstellar", year: "2014", director: "Christopher Nolan" },
        { title: "The Shawshank Redemption", year: "1994", director: "Frank Darabont" },
        { title: "Pulp Fiction", year: "1994", director: "Quentin Tarantino" },
        { title: "Parasite", year: "2019", director: "Bong Joon-ho" }
      ];

      function handleChange (event) {
        setSelectedOption(event.target.value)
      }

      function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      }

      function validate () {
        let newErrors = {};

        if(!name) {
            newErrors.name = "โปรดใส่ชื่อของคุณ"
        }
        if(!email) {
            newErrors.email = "โปรดใส่อีเมลของคุณ"
        } else if (!isValidEmail(email)) {
            newErrors.email = "รูปแบบอีเมลไม่ถูกต้อง"
        }
        if(!selectedOption) {
            newErrors.selectedOption = "กรุณาเลือกหนังที่คุณชอบ"
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length
      }

      function handleSubmit (event) {
        event.preventDefault();

        let newFormData = {
            ชื่อ: name,
            Email: email,
            หนังที่ชื่นชอบ: selectedOption,
            ความคิดเห็น: opinion
        }
        if (validate() === 0) {
            alert(JSON.stringify(newFormData,null,1))
            setName("");
            setEmail("");
            setSelectedOption("");
            setOpinion("");
            setErrors({});
        }

    
        
      }

      function handleReset (event) {
        event.preventDefault();

        setName("");
        setEmail("");
        setSelectedOption("");
        setOpinion("");
        setErrors({});
      }

    return (
        <form className="flex flex-col gap-2 w-100 p-8 justify-center items-center border-1 border-gray-300">
            <p>แบบสอบถาม</p>
            <div className="">
            <label htmlFor="name" className="block text-start">ชื่อ</label>
            <input 
                type="text" 
                id="name" 
                name="name"
                value={name}
                required 
                onChange={(event) => { setName(event.target.value) }} 
                className="border-1 border-gray-300 mb-1"/>
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            <label htmlFor="email" className="block text-start">Email</label>
            <input 
                type="text" 
                id="email" 
                name="email"
                value={email}
                required  
                onChange={(event) => { setEmail(event.target.value) }} 
                className="border-1 border-gray-300 mb-1" />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
            <div className="flex flex-col gap-1 mt-2">
                <p className="mb-1">เลือกหนังที่คุณชอบ</p>
                {movies.map((movie, index) => (
                    <div key={index} className="flex items-center gap-2 mb-1">
                        <input 
                            type="radio" 
                            id={`movie-${index}`} 
                            name="fav_movie"
                            required  
                            value={movie.title}
                            checked={selectedOption === movie.title}
                            onChange={handleChange}
                        />
                        <label htmlFor={`movie-${index}`}>{movie.title}</label>
                    </div>
                ))}
                {errors.selectedOption && <p className="text-red-500 text-sm">{errors.selectedOption}</p>}
            </div>
            <p>Selected: {selectedOption || "None"}</p>
            <p>{}</p>
            <textarea 
                placeholder="ความคิดเห็นของคุณต่อหนังที่คุณชื่นชอบ     (ไม่บังคับ)" 
                value={opinion}
                className="border-1 border-gray-300 w-80 h-40 p-2 resize-none"
                onChange={(event) => { setOpinion(event.target.value) }}
            />
            <button type="submit" className="bg-green-300 mt-2" onClick={handleSubmit}>ส่งคำตอบ</button>
            <button type="button" className="bg-red-400 mt-2" onClick={handleReset}>รีเซ็ตคำตอบ</button>
        </form>
    )
}

export default Form