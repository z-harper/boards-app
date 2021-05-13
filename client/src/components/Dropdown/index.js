import { useState, useEffect } from 'react';
import * as S from './Dropdown.styled';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';


const Dropdown = ({dropdownName, title, mapKey, sortProperty, data=[], addItems}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selection, setSelection] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [dataCopy, setDataCopy] = useState([]);

  const handleItem = (item) => {
    if (selection.some(el => el.email === item.email)) {
      // if item email already in selection email, remove selection 
      let selectionAfterRemoval = selection;
      selectionAfterRemoval = selectionAfterRemoval.filter(el => el.email !== item.email);
      setSelection([...selectionAfterRemoval]);
      addItems({dropdownName, updatedItems: selectionAfterRemoval});
    } else {
      // if item doesn't exist, add it to selection
      setSelection([...selection, item]);
      addItems({dropdownName, updatedItems: [...selection, item]});
    }
  }

  const isItemInSelection = (item) => {
    return selection
      .map(selected => selected.email)
      .includes(item.email);
  } 

  const closeSearch = (e) => {
    if (e.keyCode === 27) {
      setIsOpen(false);
      setSearchInput('');
    }
  }

  const filter = () => {
    if (searchInput.length > 1) {
      return dataCopy.filter(item => {
        return Object.values(item)
          .join(' ')
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      })
    } else {
      return dataCopy;
    }
  }

  // event listener for when escape key is pressed to close menu
  useEffect(() => {
    document.addEventListener('keydown', closeSearch);
    return () => document.removeEventListener('keydown', closeSearch);
  }, []);

  // sort the data and set the datacopy
  useEffect(() => {
    setDataCopy(data.sort((a,b) => a[sortProperty].localeCompare(b[sortProperty])));
  }, [data])

  return (
    <S.Dropdown>
      {selection.map(item => {
        return (
          <S.SelectedFriend>
            <small key={item[mapKey]}>{item.firstName}</small>
            <span style={{cursor: 'pointer', fontSize: '12px'}} onClick={() => handleItem(item)}>❌</span>
          </S.SelectedFriend>
        )
      })}
      <S.Wrapper >
        <S.Search type='text' value={searchInput} onClick={() => setIsOpen(true)} onChange={(e) => setSearchInput(e.target.value)} placeholder={title} />
        {isOpen 
          ? <FaAngleUp style={{color: '#e8b3a7'}} size={28} onClick={() => setIsOpen(!isOpen)} /> 
          : <FaAngleDown style={{color: '#7fbab2'}} size={28} onClick={() => setIsOpen(!isOpen)} />
        }
      </S.Wrapper>
      {isOpen &&
        <S.DataSelection>
          {filter(dataCopy).length > 0
            ? 
              filter(dataCopy).map(item => {
                return (
                  <S.DataItem key={item[mapKey]} onClick={() => handleItem(item)}>
                    <S.Name>{item.firstName} {item.lastName}</S.Name>
                    <S.Selected>{isItemInSelection(item) && 'Selected'}</S.Selected>
                  </S.DataItem>
                )
              })
            :
              <S.DataItem>
                <S.Name>No items match that search</S.Name>
              </S.DataItem>
          }
        </S.DataSelection>
      }
    </S.Dropdown>
  )
}

export default Dropdown
