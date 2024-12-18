import { useTranslation } from 'react-i18next';
import { Badges, GithubBadge } from '../../../components/molecules';
import * as S from './SideBar.styles';
export const Sidebar = () => {
    const { t } = useTranslation();
    const language = localStorage.getItem("language") || "en";
  
  return (
    <S.Container>
      <S.Title> {t("terms.badges")} </S.Title>
      <GithubBadge />
      <S.Title> {t("terms.personalBadges")} </S.Title>
      <Badges language={language} />
    </S.Container>
  );
};