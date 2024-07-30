import { Button } from "react-bootstrap"
import { useTranslation } from "react-i18next"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { getRoutes } from "../routes"
import { logOut } from "../services/slices/authSlice"

export const LogoutButton = () => {
  const dispatch = useDispatch()
  const {t} = useTranslation()
  const navigate = useNavigate()

  const handleLogout = () => {
    dispatch(logOut())
    navigate(getRoutes.loginPagePath())
  }


  return <Button onClick={handleLogout}>{t('header.logout')}</Button>
}
