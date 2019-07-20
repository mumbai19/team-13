<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User_M;
use App\Farmer;

class DataController extends Controller
{
    public function user_insert(Request $request)
    {
        $new=new User_M;
        $new->name=$request->name;
        $new->contact=$request->contact;
        $new->location=$request->location;
        $new->type=$request->type;
        $new->password=$request->password;
        $new->save();

        /*
        if($request->type=='Farmer')
        {
            $farm=new Farmer;
            $farm->area=-1;
            $farm->depth=-1;
            $farm->ph=-1;
            $farm->f_user_id=$new->user_id;
        }
        return response()->json([
            'user_id' => $new->user_id,
        ]);
        */
    }

    public function login_user(Request $request)
    {
        $name=$request->name;
        $pass=$request->password;
        $user=(User_M::where('name',$name)->get());
        if(count($user)>0)
        {
            if($pass==$user->password)
            {
                return response()->json([
                    'message' => 'Login Successfull',
                ]);
            }
            else
            {
                return response()->json([
                    'message' => 'Password is Wrong',
                ]);
            }
        }
        else
        {
            return response()->json([
                'message' => 'Please Register',
            ]);
        }
    }
}
