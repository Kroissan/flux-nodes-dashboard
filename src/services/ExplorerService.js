import Api from '@/services/Api';
import ExplorerApi from '@/services/ExplorerApi';

export default {
  getInfo() {
    return ExplorerApi().get('/status?q=getInfo');
  },
  getAddressBalance(address) {
    return Api().get(`/explorer/balance/${address}`);
  },
  getAddressTransactions(address) {
    return Api().get(`/explorer/transactions/${address}`);
  },
  getFluxTransactions(filter) {
    return Api().get(`/explorer/fluxtxs/${filter}`);
  },
  getScannedHeight() {
    return Api().get('/explorer/scannedheight');
  },
  reindexExplorer(zelidauthHeader) {
    return Api().get('/explorer/reindex/false', {
      headers: {
        zelidauth: zelidauthHeader,
      },
    });
  },
  reindexFlux(zelidauthHeader) {
    return Api().get('/explorer/reindex/true', {
      headers: {
        zelidauth: zelidauthHeader,
      },
    });
  },
  rescanExplorer(zelidauthHeader, height) {
    return Api().get(`/explorer/rescan/${height}/false`, {
      headers: {
        zelidauth: zelidauthHeader,
      },
    });
  },
  rescanFlux(zelidauthHeader, height) {
    return Api().get(`/explorer/rescan/${height}/true`, {
      headers: {
        zelidauth: zelidauthHeader,
      },
    });
  },
  restartBlockProcessing(zelidauthHeader) {
    return Api().get('/explorer/restart', {
      headers: {
        zelidauth: zelidauthHeader,
      },
    });
  },
  stopBlockProcessing(zelidauthHeader) {
    return Api().get('/explorer/stop', {
      headers: {
        zelidauth: zelidauthHeader,
      },
    });
  },
};
