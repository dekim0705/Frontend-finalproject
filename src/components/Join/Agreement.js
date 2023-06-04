import React, {useState} from 'react';
import styled from 'styled-components';
import MuiCheckbox from './Checkbox';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { ColumnWrapper } from './Wrappers';

const AgreementTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--text-color);  
`;

const AgreementContent = styled.div`
  width: 96%;
  height: 150px;
  font-size: 0.8rem;
  flex-wrap: wrap;
  overflow-y: scroll;
  border: 1px solid #eee;
  border-radius: 10px;
  align-self: center;
  color: var(--text-color);  
  padding: 0.6rem;
`;

const Icon = styled.div`
  cursor: pointer;
  align-self: center;
  margin-right: 6px;
`;

const Agreement = () => {

  const [isAllAgreementOpen, setIsAllAgreementOpen] = useState(false);
  const [isAgreement1Open, setAgreement1Open] = useState(false);
  const [isAgreement2Open, setAgreement2Open] = useState(false);
  const [isAgreement3Open, setAgreement3Open] = useState(false);
  const [checkItems, setCheckItems] = useState([]);

  const toggleAllAgreement = () => {
    setIsAllAgreementOpen(!isAllAgreementOpen);
  };

  const toggleAgreement1 = () => {
    setAgreement1Open(!isAgreement1Open);
  };

  const toggleAgreement2 = () => {
    setAgreement2Open(!isAgreement2Open);
  };

  const toggleAgreement3 = () => {
    setAgreement3Open(!isAgreement3Open);
  };

  const handleSingleCheck = (checked, id) => {
    if(checked) {
      setCheckItems(prev => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter((e) => e !== id));
    }
  }

  const handleAllCheck = (checked) => {
    if (checked) {
      setCheckItems(["chk1", "chk2", "chk3"]);
    } else {
      setCheckItems([]);
    }
  };

  return(
    <ColumnWrapper responsiveWidth="100%">
      <AgreementTitleWrapper>
        <MuiCheckbox
          label="약관 전체 동의"
          checked={checkItems.length === 3 ? true : false}
          onChange={(e) => handleAllCheck(e.target.checked)}        
        />
        <Icon onClick={toggleAllAgreement}>
          {isAllAgreementOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
        </Icon>
      </AgreementTitleWrapper>
      {isAllAgreementOpen && (
        <>
          <AgreementTitleWrapper>
          <MuiCheckbox
            label="이용약관 동의(필수)"
            onChange={(e) => handleSingleCheck(e.target.checked, "chk1")}
            checked={checkItems.includes("chk1") ? true : false}          
          />
            <Icon onClick={toggleAgreement1}>
              {isAgreement1Open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Icon>
          </AgreementTitleWrapper>
            {isAgreement1Open && (
              <AgreementContent>
                <p>약관 내용</p>     
              </AgreementContent>
            )}
          <AgreementTitleWrapper>
            <MuiCheckbox 
              label='개인정보 수집 및 이용동의(필수)'
              onChange={(e) => handleSingleCheck(e.target.checked, "chk2")}
              checked={checkItems.includes("chk2") ? true : false}  
            />
            <Icon onClick={toggleAgreement2}>
              {isAgreement2Open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Icon>
          </AgreementTitleWrapper>
            {isAgreement2Open && (
              <AgreementContent>
                <p>약관 내용</p>   
              </AgreementContent>
            )}
          <AgreementTitleWrapper>
            <MuiCheckbox 
              label='푸시알림 수신 동의 (선택)' 
              onChange={(e) => handleSingleCheck(e.target.checked, "chk3")}
              checked={checkItems.includes("chk3") ? true : false}  
            />
            <Icon onClick={toggleAgreement3}>
                {isAgreement3Open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </Icon>
          </AgreementTitleWrapper>
            {isAgreement3Open && (
              <AgreementContent>
                <p>동의 내용</p>     
              </AgreementContent>
            )}
        </>
      )}
    </ColumnWrapper>
  );
}
export default Agreement;