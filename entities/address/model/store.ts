import {defineStore} from "pinia";
import * as yup from "yup";
import {useForm} from "vee-validate";
import {ICity} from "~/entities/address/model/interface";
import AddressService from "~/services/address-service";

export const useAddressCreateStore = defineStore('create-store', () => {

    const cities = ref<ICity[]>([]);

    const citiesOptions = computed(() => {
        console.log(cities.value);
        return cities.value.map((item) => {
            return {
                title: item.attributes.name ?? 'Test',
                id: item.id
            }
        });
    });

    const schema = yup.object({
        city_id: yup.number().required(),
        street: yup.string().required(),
        house: yup.string().required(),
        apartment: yup.string().notRequired()
    });

    const loadCities = async () => {
        cities.value = (await AddressService.getCities()).data;
    }


    const {useFieldModel, errors: createErrors} = useForm(
        {
            validationSchema: schema
        }
    );

    const [city_id, street, house, apartment] = useFieldModel(['city_id', 'street', 'house', 'apartment']);

    return {
        createErrors,
        city_id,
        street,
        house,
        apartment,
        cities,
        citiesOptions,
        loadCities
    }

});