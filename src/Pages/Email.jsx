
import { useState,useEffect } from 'react'
import { useNavigate} from 'react-router-dom';

export default function Example() {
  const history = useNavigate();

  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [success, setSuccess] = useState(false);


  function Icon() {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-6 w-6"
      >
        <path
          fillRule="evenodd"
          d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
          clipRule="evenodd"
        />
      </svg>
    );
  }

useEffect(() => {
  if (redirect) {
    const redirectTimeout = setTimeout(() => {
      history("/email");
    }, 3000);

    return () => clearTimeout(redirectTimeout);
  }
}, [redirect, history]);

const [formData, setFormData] = useState({
  to: "",
  subject: "",
  message: ""
});
const handleInputChange = (event) => {
  const { name, value } = event.target;
  setFormData((prevFormData) => ({
    ...prevFormData,
    [name]: value
  }));
};

const handleSubmit = (event) => {
  event.preventDefault();
  const token  = "9|es6fQ9YUA0Dz7mJx4ehdu35Y4PuciUpx4bun3Djye5ff3de2";
  // Send the login data to the API endpoint
  // Replace `API_ENDPOINT` with your actual API endpoint URL
  fetch("https://arcane-earth-45086-16cddafa8d1a.herokuapp.com/api/send_email", {
    method: "POST",
    body: JSON.stringify(formData),

    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Email send  successfully:", data);
      // Reset form state or redirect to a success page
      setShowAlert(true);
      setAlertMessage("Email send  successfully!");
      setRedirect(true);
      setSuccess(true);
    })
    .catch((error) => {
      console.error("Email failed:", error);
      // Handle login failure, show error message, etc.
      setShowAlert(true);
      setAlertMessage("Email failed to send. Please try again.");
      setSuccess(false);
    });
};

  return (
    <div className=" bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Send Email</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
        Use this to send email to some body.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
      {showAlert && (
                        <div
                          className={`rounded-none border-l-4 ${
                            success
                              ? "border-green-500 bg-green-100 text-green-800"
                              : "border-red-500 bg-red-100 text-red-800"
                          } p-4 mb-4`}
                          role="alert"
                        >
                          <Icon className="inline mr-2" />
                          {alertMessage}
                        </div>
                      )}
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
       
          
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Subject
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="subject"
                id="subject"
                autoComplete="organization"
                value={formData.subject}
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="to"
                id="email"
                autoComplete="email"
                value={formData.to}
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
         
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>

        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
            >
            Send Email
          </button>
        </div>
      </form>
    </div>
  )
}
