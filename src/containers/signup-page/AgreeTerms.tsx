'use client';

import { useState } from 'react';
import {
  wrap,
  items,
  checkbox,
  toggleButton,
  downArrow,
  expandedContent,
} from '@styles/containers/signup-page/AgreeTerms.css';
import { FC } from 'react';
import AgreeTermsCheckbox from '../../components/input/AgreeTermsCheckbox';
import Image from 'next/image';

const AgreeTerms: FC = () => {
  const allAgreeTerm = '약관 전체 동의 (선택포함)';
  const individualTerms = [
    '만 14세 이상입니다. (필수)',
    '서비스 이용 약관 (필수)',
    '개인정보 수집 및 이용 (필수)',
    '마케팅 활용 및 광고성 정보 수신 동의 (선택)',
  ];
  const termContents = [
    '14세 이상을 인증하는 내용입니다.',
    '서비스 이용 약관에 대한 상세 내용입니다.',
    '개인정보 수집 및 이용에 대한 상세 내용입니다.',
    '마케팅 활용 및 광고성 정보 수신에 대한 상세 내용입니다.',
  ];

  const [checkedItems, setCheckedItems] = useState<boolean[]>(
    new Array(individualTerms.length).fill(false)
  );
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [expandedItems, setExpandedItems] = useState<boolean[]>(
    new Array(individualTerms.length).fill(false)
  );

  const handleToggle = () => setIsExpanded(!isExpanded);

  const handleAllAgreeToggle = () => {
    const allChecked = !isAllChecked;
    setIsAllChecked(allChecked);
    setCheckedItems(new Array(individualTerms.length).fill(allChecked));
  };

  const handleIndividualCheck = (index: number) => {
    const updatedChecks = [...checkedItems];
    updatedChecks[index] = !updatedChecks[index];

    const allChecked = updatedChecks.every(Boolean);
    setIsAllChecked(allChecked);
    setCheckedItems(updatedChecks);
  };

  const toggleContent = (index: number) => {
    const updatedExpandedItems = [...expandedItems];
    updatedExpandedItems[index] = !updatedExpandedItems[index];
    setExpandedItems(updatedExpandedItems);
  };

  return (
    <div className={wrap}>
      <div style={{ display: 'block' }}>
        <div className={items}>
          <div className={checkbox}>
            <AgreeTermsCheckbox
              text={allAgreeTerm}
              index={0}
              checked={isAllChecked}
              onChange={handleAllAgreeToggle}
            />
          </div>
          <p onClick={handleToggle} className={toggleButton}>
            <Image
              alt="down-arrow-icon"
              src="/icons/down-arrow.svg"
              width={10}
              height={5}
            />
          </p>
        </div>
      </div>
      {isExpanded && <hr style={{ width: '100%' }} />}

      {individualTerms.map((text, index) => (
        <div key={index + 1} style={{ display: isExpanded ? 'block' : 'none' }}>
          <div className={items}>
            <div className={checkbox}>
              <AgreeTermsCheckbox
                text={text}
                index={index + 1}
                checked={checkedItems[index]}
                onChange={() => handleIndividualCheck(index)}
              />
            </div>
            <p onClick={() => toggleContent(index)} className={toggleButton}>
              내용보기
              <Image
                alt="down-arrow-icon"
                src="/icons/down-arrow.svg"
                width={10}
                height={5}
                className={downArrow}
                style={{
                  transform: expandedItems[index]
                    ? 'rotate(180deg)'
                    : 'rotate(0deg)',
                }}
              />
            </p>
          </div>
          {expandedItems[index] && (
            <div className={expandedContent}>{termContents[index]}</div>
          )}
        </div>
      ))}
    </div>
  );
};

export default AgreeTerms;
