import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import About from './components/About';
import Nav from './components/Nav';
import TaskTracker from './bll/tasksLogic';
import TodoList from './bll/todoLogic';

function App() {
  return (
    <BrowserRouter>
      <div className='container'>
        <Nav />
        <div className='block'>
          <Routes>
            <Route path='/to-do-list' element={<TodoList />}></Route>
            <Route path='/task-tracker' element={<TaskTracker />}></Route>
            <Route path='/about' element={<About />}></Route>
          </Routes>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
