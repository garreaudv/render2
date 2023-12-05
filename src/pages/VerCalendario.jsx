
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../auth/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const MONTH_NAMES = [
  'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
  'September', 'October', 'November', 'December', 
];
const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function Calendar() {
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();
  const { logout } = useContext(AuthContext);

  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [noOfDays, setNoOfDays] = useState([]);
  const [blankdays, setBlankdays] = useState([]);
  const [events, setEvents] = useState([
    {
      event_date: new Date(2020, 3, 1),
      event_title: "April Fool's Day",
      event_theme: 'blue'
    },
    {
      event_date: new Date(2020, 3, 10),
      event_title: "Birthday",
      event_theme: 'red'
    },
    {
      event_date: new Date(2020, 3, 16),
      event_title: "Upcoming Event",
      event_theme: 'green'
    }
  ]);
  const [eventTitle, setEventTitle] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [eventTheme, setEventTheme] = useState('blue');
  const [openEventModal, setOpenEventModal] = useState(false);

  const themes = [
    {
      value: "blue",
      label: "Azul"
    },
    {
      value: "red",
      label: "Rojo"
    },
    {
      value: "yellow",
      label: "Amarillo"
    },
    {
      value: "green",
      label: "Verde"
    },
    {
      value: "purple",
      label: "Morado"
    }
  ];










  const initDate = () => {
    const today = new Date();
    setMonth(today.getMonth());
    setYear(today.getFullYear());
    getNoOfDays(); 
  };


  useEffect(() => {
    initDate(); 
  }, []);

  const isToday = (date) => {
    const today = new Date();
    const d = new Date(year, month, date);
    return today.toDateString() === d.toDateString();
  };

  const showEventModal = (date) => {
    setOpenEventModal(true);
    setEventDate(new Date(year, month, date).toDateString());
  };

  const addEvent = () => {
    if (eventTitle === '') return;

    const newEvent = {
      event_date: eventDate,
      event_title: eventTitle,
      event_theme: eventTheme
    };

    setEvents([...events, newEvent]);

    // Clear the form data
    setEventTitle('');
    setEventDate('');
    setEventTheme('blue');

    // Close the modal
    setOpenEventModal(false);
  };



  const formatearFecha = (fecha) => {
    const fechaObj = new Date(fecha);
    if (isNaN(fechaObj.getTime())) {
      console.error("Fecha no válida:", fecha);
      return null; // O manejar el error de alguna manera
    }
  
    return fechaObj;
  };
  

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/tareas`)
      .then((response) => {
        const infobackend = response.data;
        const nuevasTareas = infobackend.map((item) => ({
          event_date: formatearFecha(item.fecha_termino),
          event_title: item.nombre_tarea,
          event_theme: 'blue', 
        }));
        setEvents((prevEvents) => [, ...nuevasTareas]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  










  const getNoOfDays = () => {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const dayOfWeek = new Date(year, month).getDay();
    const blankdaysArray = [...Array(dayOfWeek).keys()];
    const daysArray = [...Array(daysInMonth).keys()].map(day => day + 1);

    setBlankdays(blankdaysArray);
    setNoOfDays(daysArray);
  };

  const config = {
    "method": "get",
    "url": `${import.meta.env.VITE_BACKEND_URL}/scope-example/protecteduser`,
    "headers": {
      "Authorization": `Bearer ${token}`
    }
  };

  // solo retorno la pagina si el token es bueno

  useEffect(() => {
    axios(config)
      .then((response) => {
        console.log("Enviaste un token bueno");
        console.log(response);

      })
      .catch((error) => {
        console.log(error);
        console.log("Enviaste un token malo");
        navigate('/');
      })
  }, [])

  const handleLogout = () => {
    logout();
    navigate('/');
  }



  return (


    <>

<nav class="bg-white border-gray-200 dark:bg-gray-900 w-full">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="\" class="flex items-center">
    <img src="src\images\ProyectoLupaIcon2.png" class="h-8 mr-3" alt="Flowbite Logo" />
    <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">ProyectoLupa</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
        
      <li>
          <a href="/home" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Home</a>
        </li>
        
        <li>
          <a href="/tareas" class="block py-2 pl-3 pr-4 text-white bg-black rounded md:bg-transparent md:text-black md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Mis Tareas</a>
        </li>
        <li>
          <a href="/habitos" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Mis Habitos</a>
        </li>
        <li>
          <a href="/calendario" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Calendario</a>
        </li>
        <li>
          <a href="/instrucciones" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Instrucciones</a>
        </li>
        <li>
          <a href="/" 
          class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
          onClick={handleLogout}>
          Cerrar Sesion
          </a>
          
        </li>
      </ul>
    </div>
  </div>
</nav>


    <div>
      <div className="antialiased sans-serif bg-gray-100 h-screen">
        <div className="container mx-auto px-4 py-2 md:py-24">
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="flex items-center justify-between py-2 px-6">
              <div>
                <span className="text-lg font-bold text-gray-800">
                  {MONTH_NAMES[month]}
                </span>
                <span className="ml-1 text-lg text-gray-600 font-normal">{year}</span>
              </div>
              <div className="border rounded-lg px-1" style={{ paddingTop: '2px' }}>
                <button
                  type="button"
                  className={`leading-none rounded-lg transition ease-in-out duration-100 inline-flex cursor-pointer hover:bg-gray-200 p-1 items-center ${month === 0 ? 'cursor-not-allowed opacity-25' : ''}`}
                  disabled={month === 0}
                  onClick={() => {
                    setMonth(month - 1);
                    getNoOfDays();
                  }}
                >
                  <svg className="h-6 w-6 text-gray-500 inline-flex leading-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <div className="border-r inline-flex h-6"></div>
                <button
                  type="button"
                  className={`leading-none rounded-lg transition ease-in-out duration-100 inline-flex items-center cursor-pointer hover:bg-gray-200 p-1 ${month === 11 ? 'cursor-not-allowed opacity-25' : ''}`}
                  disabled={month === 11}
                  onClick={() => {
                    setMonth(month + 1);
                    getNoOfDays();
                  }}
                >
                  <svg className="h-6 w-6 text-gray-500 inline-flex leading-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
            <div className="-mx-1 -mb-1">
              <div className="flex flex-wrap" style={{ marginBottom: '-40px' }}>
                {DAYS.map((day, index) => (
                  <div key={index} style={{ width: '14.26%' }} className="px-2 py-2">
                    <div className="text-gray-600 text-sm uppercase tracking-wide font-bold text-center">{day}</div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap border-t border-l">
                {blankdays.map((blankday, index) => (
                  <div key={index} style={{ width: '14.28%', height: '120px' }} className="text-center border-r border-b px-4 pt-2"></div>
                ))}
                {noOfDays.map((date, dateIndex) => (
                  <div key={dateIndex} style={{ width: '14.28%', height: '120px' }} className="px-4 pt-2 border-r border-b relative">
                    <div
                      onClick={() => showEventModal(date)}
                      className={`inline-flex w-6 h-6 items-center justify-center cursor-pointer text-center leading-none rounded-full transition ease-in-out duration-100 ${
                        isToday(date) ? 'bg-blue-500 text-white' : 'text-gray-700 hover:bg-blue-200'
                      }`}
                    >
                      {date}
                    </div>
                    <div style={{ height: '80px' }} className="overflow-y-auto mt-1">
                    {events
                      .filter((event) => {
                        const eventDate = new Date(event.event_date);
                        const calendarDate = new Date(year, month, date);
                        return eventDate.toDateString() === calendarDate.toDateString();
                      })
                      .map((event, eventIndex) => (
                          <div
                            key={eventIndex}
                            className={`px-2 py-1 rounded-lg mt-1 overflow-hidden border ${
                              event.event_theme === 'blue'
                                ? 'border-blue-200 text-blue-800 bg-blue-100'
                                : event.event_theme === 'red'
                                ? 'border-red-200 text-red-800 bg-red-100'
                                : event.event_theme === 'yellow'
                                ? 'border-yellow-200 text-yellow-800 bg-yellow-100'
                                : event.event_theme === 'green'
                                ? 'border-green-200 text-green-800 bg-green-100'
                                : event.event_theme === 'purple'
                                ? 'border-purple-200 text-purple-800 bg-purple-100'
                                : ''
                            }`}
                          >
                            <p className="text-sm truncate leading-tight">{event.event_title}</p>
                          </div>
                        ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.8)', display: openEventModal ? 'block' : 'none' }} className="fixed z-40 top-0 right-0 left-0 bottom-0 h-full w-full">
          <div className="p-4 max-w-xl mx-auto relative absolute left-0 right-0 overflow-hidden mt-24">
            <div className="shadow absolute right-0 top-0 w-10 h-10 rounded-full bg-white text-gray-500 hover:text-gray-800 inline-flex items-center justify-center cursor-pointer" onClick={() => setOpenEventModal(!openEventModal)}>
              <svg className="fill-current w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path
                  d="M16.192 6.344L11.949 10.586 7.707 6.344 6.293 7.758 10.535 12 6.293 16.242 7.707 17.656 11.949 13.414 16.192 17.656 17.606 16.242 13.364 12 17.606 7.758z"
                />
              </svg>
            </div>

            <div className="shadow w-full rounded-lg bg-white overflow-hidden w-full block p-8">
              <h2 className="font-bold text-2xl mb-6 text-gray-800 border-b pb-2">Crear Recordatorio</h2>

              <div className="mb-4">
                <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">Nombre del recordatorio</label>
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  type="text"
                  value={eventTitle}
                  onChange={(e) => setEventTitle(e.target.value)}
                />
              </div>

              <div className="mb-4">
                <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">Fecha</label>
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded-lg w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
                  type="text"
                  value={eventDate}
                  readOnly
                />
              </div>

              <div className="inline-block w-64 mb-4">
                <label className="text-gray-800 block mb-1 font-bold text-sm tracking-wide">Asignale un color</label>
                <div className="relative">
                  <select
                    onChange={(e) => setEventTheme(e.target.value)}
                    value={eventTheme}
                    className="block appearance-none w-full bg-gray-200 border-2 border-gray-200 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-white focus:border-blue-500 text-gray-700 relative"
                    >
                    {themes.map((theme, index) => (
                      <option key={index} value={theme.value}>
                        {theme.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                      <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="mt-8 text-right">
                <button
                  type="button"
                  className="bg-white hover:bg-gray-100 text-gray-700 font-semibold py-2 px-4 border border-gray-300 rounded-lg shadow-sm mr-2"
                  onClick={() => setOpenEventModal(!openEventModal)}
                >
                  Cancelar
                </button>
                <button
                  type="button"
                  className="bg-gray-800 hover:bg-gray-700 text-white font-semibold py-2 px-4 border border-gray-700 rounded-lg shadow-sm"
                  onClick={addEvent}
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

