import JsonRpcProvider from '@json-rpc-tools/provider';
import { formatJsonRpcRequest } from '@json-rpc-tools/utils';
export class EthereumProvider extends JsonRpcProvider {
    enable() {
        return this.request(formatJsonRpcRequest('eth_requestAccounts', []));
    }
}
//# sourceMappingURL=provider.js.map