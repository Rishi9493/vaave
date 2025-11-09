import { StyleSheet } from 'react-native';

export const userStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#FFFFFF',
  },
  header_title: {
    color: '#0000',
    fontWeight: '700',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  loadingText: {
    marginTop: 16,
    color: '#666',
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  errorText: {
    color: '#B00020',
    marginBottom: 8,
    textAlign: 'center',
  },
  errorSubtext: {
    color: '#666',
    textAlign: 'center',
  },
  profileCard: {
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  profileContent: {
    alignItems: 'center',
    paddingVertical: 24,
  },
  avatar: {
    backgroundColor: '#6200EE',
    marginBottom: 16,
  },
  username: {
    fontWeight: '700',
    color: '#000',
    textAlign: 'center',
  },
  infoCard: {
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
  },
  iconAvatar: {
    backgroundColor: '#E8DEF8',
    marginRight: 16,
  },
  infoContent: {
    flex: 1,
  },
  infoLabel: {
    color: '#666',
    marginBottom: 4,
    fontWeight: '600',
    letterSpacing: 0.5,
  },
  infoValue: {
    color: '#000',
    fontWeight: '500',
  },
  divider: {
    marginVertical: 12,
    backgroundColor: '#E0E0E0',
  },
});
