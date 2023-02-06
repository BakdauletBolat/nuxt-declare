import {defineStore} from "pinia";
import * as yup from "yup";
import {useForm} from "vee-validate";
import {IAddress, ICity} from "~/entities/address/model/interface";
import AddressService from "~/services/address-service";

export const useAddressCreateStore = defineStore('address-create-store', () => {

    const cities = ref<ICity[]>([]);

    const addressStore = useAddressStore();

    const city_value = ref({
        title: 'Талдықорған',
        id: 1
    });

    const citiesOptions = computed(() => {
        return cities.value.map((item) => {
            return {
                title: item.attributes.name ?? 'Test',
                id: item.id
            }
        });
    });

    const schema = yup.object().shape({
        street: yup.string().required(),
        house: yup.string().required(),
        apartment: yup.string().notRequired()
    });

    const loadCities = async () => {
        cities.value = (await AddressService.getCities()).data;
    }


    const submit = async (values: any) => {
        values['city_id'] = city_value.value.id;
        return await AddressService.createAddress(values);
    };

    const update = async (values: any) => {
        values['city_id'] = city_value.value.id;
        return await AddressService.updateAddress(values, addressStore.address?.data?.id);
    };


    return {
        cities,
        citiesOptions,
        loadCities,
        submit,
        update,
        city_value,
        schema
    }

});

export const useAddressStore = defineStore('address-store', () => {
    const addresses_list = ref<{
        data: IAddress[]
    }>({
        data: []
    })

    const address = ref<{
        data?: IAddress
    }>({
        data: undefined
    })

    const loadAddresses = async () => {
        const data = await AddressService.getAddresses();
        addresses_list.value = data;
    }

    const loadAddress = async (id: string | string[]) => {
        address.value.data = undefined;
        const data = await AddressService.getAddress(id);
        address.value = data;
    }


    return {
        address,
        addresses_list,
        loadAddresses,
        loadAddress
    }
})