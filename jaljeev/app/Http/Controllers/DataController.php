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

        if($request->type=='Farmer')
        {
            $farm=new Farmer;
            $farm->area=-1;
            $farm->depth=-1;
            $farm->ph=-1;
            $farm->f_user_id=$new->user_id;
            $farm->save();
        }
        return response()->json([
            'user_id' => $new->user_id,
        ]);
        
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
                    'message' => 0,
                ]);
            }
            else
            {
                return response()->json([
                    'message' => 1,
                ]);
            }
        }
        else
        {
            return response()->json([
                'message' => 2,
            ]);
        }
    }

    public function add_product(Request $request){
    $productname=$request->product_name;
    $vendorid=$request->user_id;
    $quant=$request->quantity;
    $pr=$request->price;

    $productid=(products::where('product_name',$productname)->get());

    $pmap=new Product_Mapper;
    $pmap->vendor_id=$vendorid;
    $pmap->product_id=$productid;
    $pmap->quantity=$quant;
    $pmap->price=$pr;
    $pmap->save();

    }
}