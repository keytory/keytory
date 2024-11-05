import {
  checkbox,
  items,
  wrap,
} from '@styles/containers/signup-page/AgreeTerms.css';
import { FC } from 'react';
import AgreeTermsCheckbox from '../../components/input/AgreeTermsCheckbox';

const AgreeTerms: FC = () => {
  return (
    <div className={wrap}>
      {[
        "약관 전체 동의 (선택포함)",
        "만 14세 이상입니다. (필수)",
        "서비스 이용 약관 (필수)",
        "개인정보 수집 및 이용 (필수)",
        "마케팅 활용 및 광고성 정보 수신 동의 (선택)",
      ].map((text, index) => (
        <div key={index} className={items}>
          <div className={checkbox}>
            <AgreeTermsCheckbox text={text} index={index} />
          </div>
          <p>▼</p>
        </div>
      ))}
    </div>
  );
};

export default AgreeTerms;
