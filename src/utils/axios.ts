/* eslint-disable react-hooks/exhaustive-deps */
import axios, { Method } from 'axios';
import { useState, useEffect } from 'react';

import { AppThunk } from '../app/store';

export interface IAxiosParams<T = {}> {
	method: Method;
	url: string;
	data?: T;
}

// Set config defaults when creating the instance
const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_DOMAIN,
});

// Alter defaults after instance has been created
axiosInstance.defaults.headers.common[
	'Authorization'
] = `Bearer ${process.env.REACT_APP_TOKEN}`;
axiosInstance.defaults.headers.common[
	'TokenCybersoft'
] = `${process.env.REACT_APP_CYBERSOFT_TOKEN}`;

// export const useAxios: <T>(axiosParams: IAxiosParams<T>) => {
// 	response: undefined;
// 	error: string;
// 	loading: boolean;
// } = (axiosParams) => {
// 	const [response, setResponse] = useState(undefined);
// 	const [error, setError] = useState('');
// 	const [loading, setLoading] = useState(true);

// 	const fetchData: <T>(params: IAxiosParams<T>) => void = async (params) => {
// 		try {
// 			const result = await axiosInstance.request(params);
// 			setResponse(result.data);

// 		} catch (error) {
// 			setError(String(error));
// 		} finally {
// 			setLoading(false);
// 		}
// 	};

// 	useEffect(() => {
// 		fetchData(axiosParams);
// 	}, []); // execute once only

// 	return { response, error, loading };
// };

export { axiosInstance };
