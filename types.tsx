/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  BookAppointment: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
  HealthProvider: undefined;
};

export type TabOneParamList = {
  TabOneScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
  HealthCardInfo: undefined;
  HealthCode: undefined;
  ReadHealthCode: undefined;
  PaitentInfoFromCode: undefined;
};

export type HealthProviderParamList = {
  HealthProviderScreen: undefined;
}