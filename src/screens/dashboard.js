import React, {useEffect, useState} from 'react';
import WelcomeBanner from 'components/WelcomeBanner';
import PageWrapper from 'container/PageWrapper';
import {
  View,
  StyleSheet,
  Image,
  FlatList,
  ScrollView,
  TouchableOpacity,
  LayoutAnimation,
} from 'react-native';
import Colors from 'theme/colors';
import AppText from 'components/AppText';
import Button from 'components/Button';
import Strings from 'locale';
import UpcomingEvent from 'container/UpcomingEvent';
import PropertyItem from 'container/PropertyItem';
import CommunityBoard from 'container/CommunityBoard';
import {useDispatch, useSelector} from 'react-redux';
import {fetchResidentData} from 'store/resident/actions';
import {selectDashboardData} from 'store/resident/selectors';
import LeaseDropDown from 'components/LeaseDropDown';

const Dashboard = () => {
  const dispatch = useDispatch();
  const dashboardData = useSelector(selectDashboardData);

  const [upcomingEvents, setUpcomingEvents] = useState([]);
  const [selectedLease, setSelectedLease] = useState();
  const [showLeaseDropdown, setShowLeaseDropdown] = useState(false);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    dispatch(fetchResidentData());
  }, [dispatch]);

  useEffect(() => {
    if (dashboardData?.currentLeases?.length) {
      setSelectedLease(dashboardData?.currentLeases[0]);
    }
  }, [dashboardData]);

  useEffect(() => {
    if (selectedLease) {
      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
      setUpcomingEvents(selectedLease.upcomingPayments);
    }
  }, [selectedLease]);

  const onCloseWelcome = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowWelcome(false);
  };

  const selectedLeaseDisplayName = selectedLease
    ? `${selectedLease.unitDisplayName}${
        selectedLease.unitPrimaryDisplayName
          ? '#' + selectedLease.unitPrimaryDisplayName
          : ''
      }`
    : '';

  return (
    <>
      {showWelcome && <WelcomeBanner onClose={onCloseWelcome} />}
      <PageWrapper
        statusBarColor={Colors.primary.midnight}
        pageColor={Colors.grayscale_white}>
        <View style={style.pageContainer}>
          <View style={style.overview}>
            <View style={style.dropdownNotification}>
              <View style={style.notificationIcon} />
              <TouchableOpacity onPress={() => setShowLeaseDropdown(true)}>
                <View style={style.dropdown}>
                  <AppText variant="h4" color={Colors.grayscale.white}>
                    {selectedLeaseDisplayName}
                  </AppText>
                  <Image
                    source={require('assets/icons/down.png')}
                    style={style.dropdownIcon}
                  />
                </View>
              </TouchableOpacity>
              <Image
                source={require('assets/icons/notifications.png')}
                style={style.notificationIcon}
              />
            </View>
            <AppText
              variant="h4"
              color={Colors.grayscale.white}
              style={style.due}>
              $1000 due in
            </AppText>
            <View style={style.daysContainer}>
              <AppText variant="billboard" color={Colors.grayscale.white}>
                16 days
              </AppText>
              <Button
                variant="outline"
                color={Colors.grayscale.white}
                style={style.learnMore}
                onPress={() => {}}>
                {Strings.common.modify}
              </Button>
            </View>
          </View>
          <View style={style.paymentList}>
            <FlatList
              data={upcomingEvents}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              renderItem={({item, index}) => (
                <UpcomingEvent key={item.paymentId} item={item} />
              )}
            />
          </View>
          <View style={style.subPageContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
              <AppText
                variant="h3"
                style={style.titleStyle}
                color={Colors.primary.midnight}>
                {Strings.dashboard.your_property}
              </AppText>
              <PropertyItem name="John Smith" location="One Riverside" />
              <AppText
                variant="h3"
                color={Colors.primary.midnight}
                style={style.titleStyle}>
                {Strings.dashboard.community_board}
              </AppText>
              <CommunityBoard
                icon={require('assets/icons/graph.png')}
                title="Get the credit you deserve"
                description="Learn how paying rent with Circa helps build your credit score"
              />
              <CommunityBoard
                icon={require('assets/icons/rent_reserve.png')}
                title="What’s your backup plan?"
                description="Start saving so you can always pay rent, even when life gets messy"
              />
            </ScrollView>
          </View>
        </View>
        <LeaseDropDown
          isVisible={showLeaseDropdown}
          options={dashboardData?.currentLeases ?? []}
          onDismiss={() => setShowLeaseDropdown(false)}
          onSelect={value => setSelectedLease(value)}
        />
      </PageWrapper>
    </>
  );
};

const style = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: Colors.grayscale.white,
  },
  overview: {
    height: 240,
    backgroundColor: Colors.primary.midnight,
    padding: 18,
  },
  dropdownNotification: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  dropdown: {
    flexDirection: 'row',
  },
  dropdownIcon: {
    width: 16,
    height: 16,
    marginLeft: 10,
  },
  notificationIcon: {
    width: 22,
    height: 22,
    marginRight: 2,
  },
  due: {
    marginTop: 40,
  },
  daysContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 6,
  },
  paymentList: {
    position: 'relative',
    top: -30,
    height: 150,
  },
  subPageContainer: {
    position: 'relative',
    top: -110,
    flex: 1,
    marginBottom: -110,
  },
  titleStyle: {
    marginTop: 24,
    marginHorizontal: 16,
  },
});

export default Dashboard;
