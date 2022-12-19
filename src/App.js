import React, {useState} from 'react';
import Counter from './projects/Counter/index';
import Modal from './projects/Modal/index';
import Quiz from './projects/Quiz/index';
import Userss from './projects/Users/index';
import Currency from './projects/Converter/index';
import Photos from './projects/Photos/index';
import Header from './components/Header/index';

const App = () => {

  const allProjects = [<Counter/>, <Modal/>, <Quiz/>, <Userss/>, <Currency/>, <Photos/>];
  const allProjectsNames = ["Счётчик", "Модалка", "Викторина", "Пользователи", "Конвертер валют", "Фотографии"];
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handlePickProject = (projectIndex) => setCurrentProjectIndex(projectIndex);

  return (
    <>
      <Header 
        items={allProjectsNames} 
        currentItem={currentProjectIndex}
        pickItem={handlePickProject}
      />

      {allProjects[currentProjectIndex]}
    </>
  )
}

export default App;