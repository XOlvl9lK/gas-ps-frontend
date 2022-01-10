import { useAppSelector } from '../../../common/hooks/useAppSelector'
import { articleOptionsSelector } from '../../sideBar/store/slice'

export const useHeaderState = () => {
  const articles = useAppSelector(articleOptionsSelector)

  return {
    articles
  }
}