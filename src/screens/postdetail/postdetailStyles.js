import { StyleSheet } from 'react-native';

export const postStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerContainer: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
  },
  header_title: {
    color: '#0000',
    fontWeight: '700',
  },
  listContent: {
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

  postCard: {
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  postHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  userAvatar: {
    backgroundColor: '#6200EE',
    marginRight: 12,
  },
  postHeaderText: {
    flex: 1,
  },
  userLabel: {
    color: '#666',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  userId: {
    color: '#000',
    fontWeight: '600',
    marginTop: 2,
  },
  postTitle: {
    color: '#000',
    fontWeight: '700',
    marginBottom: 12,
    lineHeight: 28,
  },
  postDivider: {
    marginVertical: 12,
    backgroundColor: '#E0E0E0',
  },
  postBody: {
    color: '#424242',
    lineHeight: 24,
  },

  commentsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop: 8,
  },
  commentsTitle: {
    color: '#000',
    fontWeight: '700',
  },
  commentCount: {
    backgroundColor: '#E8DEF8',
  },
  commentCountText: {
    color: '#6200EE',
    fontWeight: '600',
  },

  commentCard: {
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  commentAvatar: {
    backgroundColor: '#E8DEF8',
    marginRight: 12,
  },
  commentHeaderText: {
    flex: 1,
  },
  commentName: {
    color: '#000',
    fontWeight: '600',
    marginBottom: 4,
    textTransform: 'capitalize',
  },
  emailChip: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    alignSelf: 'flex-start',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 4,
  },
  emailIcon: {
    backgroundColor: 'transparent',
    marginRight: 4,
  },
  commentEmail: {
    color: '#666',
    fontSize: 11,
  },
  commentDivider: {
    marginVertical: 12,
    backgroundColor: '#E0E0E0',
  },
  commentBody: {
    color: '#424242',
    lineHeight: 22,
  },

  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 48,
    paddingHorizontal: 32,
  },
  emptyIcon: {
    backgroundColor: '#E0E0E0',
    marginBottom: 16,
  },
  emptyText: {
    color: '#000',
    fontWeight: '600',
    marginBottom: 8,
    textAlign: 'center',
  },
});
