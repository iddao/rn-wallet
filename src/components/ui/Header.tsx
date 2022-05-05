import {
  Header as BaseHeader,
  HeaderBackButton,
} from "@react-navigation/elements";
import { useNavigation } from "@react-navigation/native";

type BaseProps = Parameters<typeof BaseHeader>[0];
type Props = BaseProps;
export default function Header({ headerLeft, ...props }: Props) {
  const navigation = useNavigation();
  const canGoBack = navigation.canGoBack();
  const goBack = () => {
    navigation.goBack();
  };
  let _headerLeft = headerLeft;
  if (!_headerLeft && canGoBack) {
    _headerLeft = ({ tintColor, pressColor, pressOpacity, labelVisible }) => {
      return (
        <HeaderBackButton
          onPress={goBack}
          tintColor={tintColor}
          pressColor={pressColor}
          pressOpacity={pressOpacity}
          labelVisible={labelVisible}
        />
      );
    };
  }
  return <BaseHeader {...props} headerLeft={_headerLeft} />;
}
