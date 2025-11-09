import { StyleSheet } from 'react-native';
import { moderateScale, scale, verticalScale } from 'react-native-size-matters';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header_title: {
    fontSize: moderateScale(28, 0.4),
    fontWeight: '500',
  },
  input: {
    marginHorizontal: 15,
    backgroundColor: 'white',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(14),
    paddingVertical: scale(12),
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  countBadge: {
    backgroundColor: '#6200ee',
    paddingHorizontal: scale(10),
    paddingVertical: scale(4),
    borderRadius: 12,
    minWidth: moderateScale(12),
    alignItems: 'center',
  },
  countText: {
    color: '#fff',
    fontSize: moderateScale(13, 0.2),
    fontWeight: '600',
  },
  listContent: {
    paddingHorizontal: scale(15),
    paddingTop: scale(16),
    flexGrow: 1,
  },
  card: {
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: verticalScale(11),
  },
  numberBadge: {
    width: moderateScale(30),
    height: moderateScale(30),
    borderRadius: 16,
    backgroundColor: '#e3f2fd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: '#1976d2',
    fontSize: moderateScale(14, 0.4),
    fontWeight: '700',
  },
  titleText: {
    flex: 1,
    fontSize: moderateScale(15, 0.4),
    fontWeight: '600',
    color: '#212121',
    lineHeight: 22,
  },
  userName: {
    marginTop: scale(8),
    fontSize: moderateScale(14),
    color: '#757575',
    marginLeft: scale(40),
    marginRight: 'auto',
  },
  separator: {
    height: verticalScale(10),
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scale(60),
  },
  loadingText: {
    marginTop: scale(16),
    fontSize: moderateScale(15, 0.3),
    color: '#757575',
  },
  emptyText: {
    fontSize: moderateScale(62),
    marginBottom: scale(16),
  },
  emptyTitle: {
    fontSize: moderateScale(18),
    fontWeight: '600',
    color: '#212121',
    marginBottom: scale(7),
  },
  emptySubtitle: {
    fontSize: moderateScale(13),
    color: '#757575',
  },
  footerContainer: {
    alignItems: 'center',
    paddingTop: scale(23),
    paddingBottom: scale(31),
  },
  divider: {
    width: moderateScale(60),
    height: verticalScale(3),
    backgroundColor: '#e0e0e0',
    borderRadius: 2,
    marginBottom: scale(15),
  },
  endText: {
    fontSize: moderateScale(16, 0.3),
    fontWeight: '600',
    color: '#1976d2',
    marginBottom: scale(8),
  },
  endSubtext: {
    fontSize: moderateScale(14),
    color: '#9e9e9e',
  },
  spacer: {
    height: verticalScale(20),
  },
});
