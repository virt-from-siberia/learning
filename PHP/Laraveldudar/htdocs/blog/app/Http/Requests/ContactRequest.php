<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;


class ContactRequest extends FormRequest
{
    //NOTE/:NOTE
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'email' => 'required|email',
            'subject' => 'required | min:5 | max:50',
            'message' => 'required | min:15 | max:500',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Поле имя является обязательным',
            'email.required' => 'Поле email является обязательным',
            'subject.required' => 'Поле тема сообщение не должно быть пустым,  содержать не менее 5 символов и не больше 50',
            'message.required' => 'Поле сообщение не должно быть пустым , содержать не менее 15 символов и не больше 500'
        ];
    }
}